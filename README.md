# Module Pattern Bootstrap
An bootstrap that uses the Module design pattern.

## Installation

Clone into your project.
```shell
git clone git@github.com:guilhermepontes/module-pattern-bootstrap.git
```

## Usage
```javascript
var init =  {
	ready : function() {
		sampleApplication.init();
	},

	load : function() {
		sampleApplication.load();
	}
};


$( document ).ready( init.ready )
$( window ).load( init.load );
```



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

