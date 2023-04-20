# plugin_sample 🔌

## What is it?

This is a demo project that includes a sample catridge for EComm. The example catridge shows how to add hooks to SCAPI. 

## How to upload this example to your EComm instance?

The most simple way to upload this code to your EComm instance is the use the VSCode plugin "Prophet". Take a look at [these](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet) docs to learn how to use it. The most important step will be to define you `dw.json` file, which is were you can set the hostname, username, password, and code version. These should be the only details you need to upload your code.

## What does the hook do?

The hook simply modifies the `product-search` response value so that each search hit has a custom property called `c_isInBasket`. This property will be true if the product hit is in the current users basket. _NOTE: This implementation only works for master/variant type products._