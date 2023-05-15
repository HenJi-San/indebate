let indebateText = document.querySelectorAll("._animScroll")

if (indebateText.length > 0) {
  window.addEventListener("scroll", indebateOnScroll);
  function indebateOnScroll(params) {
    for (let index = 0; index < indebateText.length; index++) {
      const indebateTextConst = indebateText[index];
      const indebateTextHeight = indebateTextConst.offsetHeight;
      const indebateTextOffset = offset(indebateTextConst).top;
      const indebateTextStart = 4000;

      let indebateTextPoint = window.innerHeight - indebateTextHeight / indebateTextStart;

      if (indebateTextHeight > window.innerHeight) {
        indebateTextPoint = window.innerHeight - window.innerHeight / indebateTextStart;
      }
      if ((pageYOffset > indebateTextOffset - indebateTextPoint) && pageYOffset < (indebateTextOffset + indebateTextHeight)) {
        indebateTextConst.classList.add('_active');
      } else {
        indebateTextConst.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  indebateOnScroll();
}