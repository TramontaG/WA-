const onClickMsg = async (ev) => {
  let target = ev.target;
  while (!target.getAttribute(["data-id"])) {
    target = target.parentElement;
  }
  const id = target.getAttribute(["data-id"]);
  const msg = await Client.getMessageById(id);
  window.TEST_TARGET = target;
  if (msg.hasMedia && msg.rawData.isViewOnce) {
    revealMedia(
      msg,
      target.parentElement.querySelector(
        `div > div > div > div:nth-child(3) > div`
      )
    );
  }
};

const addMediaToMessage = () => {
  const allMesasgesInDom = document.querySelectorAll("[data-id]");
  allMesasgesInDom.forEach((message) =>
    message.removeEventListener("click", onClickMsg)
  );
  allMesasgesInDom.forEach((message) => {
    message.addEventListener("click", onClickMsg);
  });
};

const startMainObserver = () => {
  const mainDiv = document.getElementById("main");
  if (!mainDiv) {
    return;
  }

  MainDivObserver.observe(mainDiv, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["data-id"],
  });
};

const AppObserver = new MutationObserver(startMainObserver);
const MainDivObserver = new MutationObserver(addMediaToMessage);

AppObserver.observe(document.getElementById("app"), {
  subtree: true,
  attributes: true,
  childList: true,
});
