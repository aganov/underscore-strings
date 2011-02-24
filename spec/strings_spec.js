describe("Underscore", function() {
  describe("Strings", function() {
    describe("#blank", function() {
      it("should return true if the string is 'blank' - either empty (length of 0) or containing only whitespace", function() {
        expect(_("").blank()).toBeTruthy();
        expect(_(" ").blank()).toBeTruthy();
        expect(_(" a ").blank()).toBeFalsy();
      });
    });
    
    describe("#camelize", function() {
      it("should convert a string separated by dashes into a camelCase equivalent", function() {
        expect(_("background-color").camelize()).toEqual("backgroundColor");
        expect(_("-moz-binding").camelize()).toEqual("MozBinding");
      });
    });
    
    describe("#capitalize", function() {
      it("should return a copy of string with the first character converted to uppercase and the remainder to lowercase", function() {
        expect(_("hello").capitalize()).toEqual("Hello");
        expect(_("HELLO").capitalize()).toEqual("Hello");
      });
      
      it("should be locale insensitive (only upcases a-z and only downcases A-Z)", function() {
        // expect(_("тест").capitalize()).toEqual("Тест");
        // expect(_("БАР").capitalize()).toEqual("Бар");
      });
    });
    
    describe("#dasherize", function() {
      it("should replace every instance of the underscore character '_' by a dash '-'", function() {
        expect(_("border_bottom_width").dasherize()).toEqual("border-bottom-width");
      });
    });
    
    describe("#empty", function() {
      it("should return true if the string has a length of zero", function() {
        expect(_(" ").empty()).toBeFalsy();
        expect(_("hello").empty()).toBeFalsy();
        expect(_("\x00").empty()).toBeFalsy();
        expect(_("").empty()).toBeTruthy();
      });
    });
    
    describe("#endsWith", function() {
      it("should check if the string ends with substring", function() {
        expect(_('slaughter').endsWith('laughter')).toBeTruthy();
        expect(_('shutter island').endsWith('shutter')).toBeFalsy();
      });
    });
    
    describe("#escapeHTML", function() {
      it("should convert HTML special characters to their entity equivalents.", function() {
        expect(_('<div class="article">This is an article</div>').escapeHTML()).toEqual('&lt;div class="article"&gt;This is an article&lt;/div&gt;');
        expect(_("'';!--\"<XSS>=&{()}").escapeHTML()).toEqual("'';!--\"&lt;XSS&gt;=&amp;{()}");
      });
    });
        
    describe("#include", function() {
      it ("should check if the string contains substring", function() {
        expect(_('hello world').include('h')).toBeTruthy();
        expect(_('hello world').include('hello')).toBeTruthy();
        expect(_('hello world').include('llo w')).toBeTruthy();
        expect(_('hello world').include('world')).toBeTruthy();
        expect(_('hello world').include('bye')).toBeFalsy();
        expect(_('').include('bye')).toBeFalsy();
      });
    });
    describe("#toQueryParams", function() {
      it("should parse a URI-like query string and return an object composed of parameter/value pairs.", function() {
        var result = {a:undefined, b:'c'};
        expect(_("").toQueryParams()).toEqual({});
        expect(_("foo?").toQueryParams()).toEqual({});
        expect(_("foo?a&b=c").toQueryParams()).toEqual(result);
        expect(_("foo?a&b=c#fragment").toQueryParams()).toEqual(result);
      });
      
      it("should parse a URI-like query string with custom delimiter", function() {
        expect(_("a;b=c").toQueryParams(";")).toEqual({a:undefined, b:'c'});
      });
    });
    describe("#startsWith", function() {
      it("should return true if string starts with substring", function() {
        expect(_("hello").startsWith("h")).toBeTruthy();
        expect(_("Underscore").startsWith("Under")).toBeTruthy();
        expect(_("Lorem ipsum").startsWith("Under")).toBeFalsy();
        expect(_("Underscore").startsWith("score")).toBeFalsy();
      });
    });
    describe("#strip", function() {
      it("should strip all leading and trailing whitespace from a string", function() {
        expect(_('    hello world!    ').strip()).toEqual("hello world!");
        expect(_('hello world').strip()).toEqual('hello world');
        expect(_("hello  \n  world ").strip()).toEqual("hello  \n  world");
      });
    });
    describe("#truncate", function() {
      var source = 'foo boo boz foo boo boz foo boo boz foo boo boz';
      it("should truncate a string to the given length", function() {
        expect(_(source).truncate(source.length)).toEqual(source);
        expect(_(source).truncate(0)).toEqual("foo boo boz foo boo boz foo...");
        expect(_(source).truncate(5)).toEqual("fo...");
      });
      
      it("should ends string with given suffix", function() {
        expect(_(source).truncate(5, "")).toEqual("foo b");
        expect(_(source).truncate(5, ".")).toEqual("foo .");
      });
    });
    describe("#underscore", function() {
      it("should convert a camelized string into a series of words separated by an underscore", function() {
        expect(_("borderBottomWidth").underscore()).toEqual("border_bottom_width");
        expect(_("foo_bar").underscore()).toEqual("foo_bar");
        expect(_("foo_bar").underscore()).toEqual("foo_bar");
        expect(_("Foo").underscore()).toEqual("foo");
      });
    });
    describe("#unescapeHTML", function() {
      it("should convert the entity forms of special HTML characters to their normal form ", function() {
        expect(_("foo &lt;span&gt;bar&lt;/span&gt;").unescapeHTML()).toEqual("foo <span>bar</span>");
        expect(_("foo ß bar").unescapeHTML()).toEqual("foo ß bar");
      });
    });
  });
});