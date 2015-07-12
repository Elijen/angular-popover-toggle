# angular-popover-toggle
`popoverToggle` directive allowing manual control over AngularUI's popovers

## Installation
Download and include the `popover-toggle.js` file after AngularJS on your page. You can use Bower: 
```
bower install angular-popover-toggle
```

Declare a dependency on `popoverToggle` in your module:
```JavaScript
angular.module('YourModule', ['ui.bootstrap', 'popoverToggle']);
```

## Usage
Now you can use `popover-toggle` directive in addition to `popover` and `popover-template` directives:
```HTML
<div ng-init="isPopoverOpen = true">
    <span popover="Hello World!" popover-toggle="isPopoverOpen">There is a popover above me!</span>
</div>
```
