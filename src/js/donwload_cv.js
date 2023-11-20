const downIoader = document
  .getElementById("downIoadCV")
  .addEventListener("click", function () {
    const cvUrl = "/textFile/jason-cv.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "jason_umaña_campos-cv.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  });

export default downIoader;
