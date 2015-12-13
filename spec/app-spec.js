describe("Scope Tests", function() {
  it("MyApp must exists", function() {
    expect(MyApp).toBeDefined();
  });

  describe("Public methods", function(){
  	it("MyApp.init() must be PUBLIC", function() {
	    expect(MyApp.init).toBeDefined();
	  });

	  it("MyApp._cache() must be PUBLIC", function() {
	    expect(MyApp._cache).toBeDefined();
	  });
  });

  describe("Public properties", function(){
  	it("MyApp.body must be PUBLIC", function() {
	    expect(MyApp.body).toBeDefined();
	  });

    it("MyApp._cache must be PUBLIC", function() {
      expect(MyApp._cache).toBeDefined();
    });

    it("MyApp._bind must be PUBLIC", function() {
      expect(MyApp._bind).toBeDefined();
    });
  });

  describe("Private methods", function(){
  	it("MyApp.app must PRIVATE", function() {
	    expect(MyApp.application).toBeUndefined();
	  });

	  it("MyApp._private must be PRIVATE", function() {
	    expect(MyApp._private).toBeUndefined();
	  });
  });
});
