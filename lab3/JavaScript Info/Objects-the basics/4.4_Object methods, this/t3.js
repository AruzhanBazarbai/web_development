let ladder = {
    step: 0,
    up() {
      return ++this.step;
    },
    down() {
       return --this.step;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };