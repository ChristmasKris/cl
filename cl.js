let cl = {
   log: function(msg, bgColor, fontColor, borderRadius, fontSize, padding) {
      msg = msg ? msg : 'Default message';
      bgColor = bgColor ? bgColor : '#ffffff';
      fontColor = fontColor ? fontColor : '#000000';
      borderRadius = borderRadius ? borderRadius : '0';
      fontSize = fontSize ? fontSize : '10';
      padding = padding ? padding : '0';

      var colors = [bgColor, fontColor];

      for(let i = 0; i < colors.length; i++) {
         if(colors[i].charAt(0) == '#') {
            if(!this.checkColorHex(colors[i])) {
               return false;
            }
         } else if(colors[i].charAt(0) != '#') {
            if(!this.checkColorName(colors[i])) {
               return false;
            }
         }
      }

      let styles = [
         'background: ' + bgColor,
         'color: ' + fontColor,
         'border-radius: ' + borderRadius,
         'font-size: ' + fontSize,
         'padding: ' + padding
      ].join(';');

      console.log('%c' + msg, styles);
   },

   checkColorHex: function(color) {
      let allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      color = color.substr(1);

      if((color.length < 3) || (color.length == 5) || (color.length > 6)) {
         this.error("The color you entered: \"" + color + "\" is not a valid color.");
         return false;
      }

      for(let i = 0; i < color.length; i++) {
         if(allowedChars.indexOf(color.charAt(i)) == (-1)) {
            this.error("The color you entered: \"" + color + "\" is not a valid color.");
            return false;
         }
      }

      return true;
   },

   checkColorName: function(color) {
      let s = new Option().style;
      s.color = color;
      if(s.color == color) {
         return true;
      } else {
         this.error("The color you entered: \"" + color + "\" is not a valid color");
         return false;
      }
   },

   error: function(msg) {
      console.error(msg);
   }
};

cl.log('CL loaded successfully', '#46a049', '#ffffff', '4px', '14px', '0 7px');