document.addEventListener("DOMContentLoaded", function () {
    var cursor = {
        delay: 1,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        
        init: function() {
            this.setupEventListeners();
            this.animateDotOutline();
        },

        updateCursor: function(e) {
            this.cursorVisible = true;
            this.toggleCursorVisibility();

            this.endX = e.pageX;
            this.endY = e.pageY;
            this.$dot.style.top = `${this.endY}px`;
            this.$dot.style.left = `${this.endX}px`;

            this._x += (this.endX - this._x) / this.delay;
            this._y += (this.endY - this._y) / this.delay;
            this.$outline.style.top = `${this._y}px`;
            this.$outline.style.left = `${this._x}px`;
        },

        setupEventListeners: function() {
            var self = this;

            document.querySelectorAll('a, .custom-btn').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });

            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });

            document.addEventListener('mousemove', function(e) {
                self.updateCursor(e);
            });

            document.addEventListener('mouseenter', function() {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            });

            document.addEventListener('mouseleave', function() {
                self.cursorVisible = false;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            });
        },

        animateDotOutline: function() {
            var self = this;
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = `${self._y}px`;
            self.$outline.style.left = `${self._x}px`;

            requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize: function() {
            if (this.cursorEnlarged) {
                this.$dot.classList.add('scale-up');
                this.$outline.classList.add('scale-up');
            } else {
                this.$dot.classList.remove('scale-up');
                this.$outline.classList.remove('scale-up');
            }
        },

        toggleCursorVisibility: function() {
            if (this.cursorVisible) {
                this.$dot.style.opacity = 1;
                this.$outline.style.opacity = 1;
            } else {
                this.$dot.style.opacity = 0;
                this.$outline.style.opacity = 0;
            }
        }
    };

    cursor.init();
});
