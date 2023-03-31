let vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      resetIsLoading: false,
      copyIsLoading: false,
      resetIsDisabled: false,
      copyIsDisabled: false,
      buttonTextCopy: "Copy",
      buttonTextReset: "Reset",
    };
  },
  computed: {
    box() {
      return {
        transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
        `,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    async copy() {
      let text = `transform:${this.box.transform};`;
      await navigator.clipboard.writeText(text);
    },
    onClickCopy() {
      this.copyIsLoading = true;
      this.copyIsDisabled = true;
      setTimeout(() => {
        this.copyIsLoading = false;
        this.copyIsDisabled = false;
        alert("CSS Copied to Clipboard!");
      }, 2000); // Change the time to control how long the animation lasts
    },
    onClickReset() {
      this.resetIsLoading = true;
      this.resetIsDisabled = true;
      setTimeout(() => {
        this.resetIsLoading = false;
        this.resetIsDisabled = false;
        this.reset();
      }, 2000); // Change the time to control how long the animation lasts
    },
    runCopyMethods() {
      this.copy();
      this.onClickCopy();
    },
    // runResetMethods() {
    //   this.reset();
    //   this.onClickReset();
    // },
  },
}).mount("#app");
