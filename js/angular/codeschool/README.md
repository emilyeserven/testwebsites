## Purpose of This Project

To retype, practice, and record the AngularJS CodeSchool course code.

Basic notes were taken in my personal documentation site, [Refs&Docs](http://emilyserven.net/ref-docs/angular-overview.html).

## Listings of Chapters and Additions Made

### Level 1

#### 1.2

*Actions:* Created a module, attached the module using [`ng-app`](http://emilyserven.net/ref-docs/angular-doc-directives.html#ng-app), and added a simple expression to the page.

*Display:* "Hello, Angular!" appears on the page.

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/f5cd4f4610e80bce3091b3270e4bf5d2296250e3/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/f5cd4f4610e80bce3091b3270e4bf5d2296250e3/js/angular/codeschool/index.html)

#### 1.4

*Actions:* Added a controller in the `JS` and attached it to the `HTML` page. Then, created a `gem` object and assigned it to the `product` property of the new controller (`StoreController`). Finally, used expressions in the `HTML` to display some properties of the `gem` object.

*Display:* The name and price of the single `gem` show on opposite sides of the screen.

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/64409a6e1857c98b5d226febf99f09a3d1421cc8/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/64409a6e1857c98b5d226febf99f09a3d1421cc8/js/angular/codeschool/index.html)

#### 1.6

*Actions:* Used the [`ng-show` and `ng-hide`](http://emilyserven.net/ref-docs/angular-doc-directives.html#ng-show-and-ng-hide) directives to determine if a button (and the entire product) should be displayed or not.

*Display:* The product displays on the screen, along with an `Add to Cart` button. This can be changed by manipulating the boolean values of `canPurchase` and `soldOut` in the `app.js` file.

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/4f8bbd7f4731668ee091a04b748baef2b0b043b6/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/4f8bbd7f4731668ee091a04b748baef2b0b043b6/js/angular/codeschool/index.html)

#### 1.7

*Actions:* Created the `gems` array to replace the `gem` property. Replaced the reference in the controller (`StoreController`) and then used the [`ng-repeat`](http://emilyserven.net/ref-docs/angular-doc-directives.html#ng-repeat) directive to reduce redundancies in code.

*Display:* Multiple gem names (Azurite, Bloodstone, and Zircon) and their prices are displayed as the `gems` array is iterated through. The `canPurchase` and `soldOut` properties plus the functionality associated with them have been deleted.

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/d3429c0abef0316a185e5d8b39ae60e6cdb8e81b/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/d3429c0abef0316a185e5d8b39ae60e6cdb8e81b/js/angular/codeschool/index.html)

### Level 2

#### 2.2

*Actions:* Deleted the `$` sign manually added before the price numeric value. After, added a [`currency`](http://emilyserven.net/ref-docs/angular-doc-filters.html#currency) filter to the `product.price` expression.

*Display:* Nothing displays differently.

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/3366ab0f053aad2806758c55f3de817d6f3dc92a/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/3366ab0f053aad2806758c55f3de817d6f3dc92a/js/angular/codeschool/index.html)

#### 2.3

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/f96371e1aa5f6d30a1faf7a5327e4563c4456a17/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/f96371e1aa5f6d30a1faf7a5327e4563c4456a17/js/angular/codeschool/index.html)

#### 2.4

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/58d7584e5e4c7b7f06d20c36a6f0ec5f59eb4ecd/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/58d7584e5e4c7b7f06d20c36a6f0ec5f59eb4ecd/js/angular/codeschool/index.html)

#### 2.5

[GitHub](https://github.com/emilyeserven/testwebsites/tree/ff994238ba6313ae173bbcc7bdf996c399a05ffe/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/ff994238ba6313ae173bbcc7bdf996c399a05ffe/js/angular/codeschool/index.html)

#### 2.7

[GitHub](https://github.com/emilyeserven/testwebsites/tree/639befebbc415d19c3f12db8d641275f8ec0f1cd/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/639befebbc415d19c3f12db8d641275f8ec0f1cd/js/angular/codeschool/index.html)

#### 2.8

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/a58a3a9be88375460c3e8216c9f04e9d6cc6d8f6/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/a58a3a9be88375460c3e8216c9f04e9d6cc6d8f6/js/angular/codeschool/index.html)

#### 2.9

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/761c7bd4ad93948477449778e7ee45e6167eaaeb/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/761c7bd4ad93948477449778e7ee45e6167eaaeb/js/angular/codeschool/index.html)

#### 2.10

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/b62a4a46b75d2e3d69f0c408fb780375e0bc31a3/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/b62a4a46b75d2e3d69f0c408fb780375e0bc31a3/js/angular/codeschool/index.html)

### Level 3

#### 3.2

[GitHub Commit](https://github.com/emilyeserven/testwebsites/21cf1551f6df9ee6887b3136620a1c3181507faf/js/angular/codeschool/index.html) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/21cf1551f6df9ee6887b3136620a1c3181507faf/js/angular/codeschool/index.html)

#### 3.3

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/be8fab016768a96da48831b09b46b2563fad41a4/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/be8fab016768a96da48831b09b46b2563fad41a4/js/angular/codeschool/index.html)

#### 3.4

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/d90efbbca2fd75b5346b54b3361f121e86ccea19/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/d90efbbca2fd75b5346b54b3361f121e86ccea19/js/angular/codeschool/index.html)

#### 3.6

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/272973004fef86df79305cfe7afa29901398f310/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/272973004fef86df79305cfe7afa29901398f310/js/angular/codeschool/index.html)

#### 3.7

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/5dc8244d0c8ac671c54e2e83eb381abd06943dd9/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/5dc8244d0c8ac671c54e2e83eb381abd06943dd9/js/angular/codeschool/index.html)

#### 3.9

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/b1a7eab2130fd04018192eb385cb506702df2c5c/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/b1a7eab2130fd04018192eb385cb506702df2c5c/js/angular/codeschool/index.html)

#### 3.10

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/27c8aa3488b1c88598d7c3e0139a17d72718a571/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/27c8aa3488b1c88598d7c3e0139a17d72718a571/js/angular/codeschool/index.html)

#### 3.11

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/5c28cf6b9d5d1f9b3aa29ac61a439e4a28c973c5/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/5c28cf6b9d5d1f9b3aa29ac61a439e4a28c973c5/js/angular/codeschool/index.html)

#### Styling Updates

[GitHubCommit](https://github.com/emilyeserven/testwebsites/tree/6af5190749ade1508b041c8bc8affe909fcae106/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/6af5190749ade1508b041c8bc8affe909fcae106/js/angular/codeschool/index.html)

### Level 4

#### 4.2

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/5cb760118fda78035552ed4b9cdbb41c496c67ab/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/5cb760118fda78035552ed4b9cdbb41c496c67ab/js/angular/codeschool/index.html)

#### 4.3

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/fdd800ff599098fba5c1fee3ff7bb5b9fddda7cc/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/fdd800ff599098fba5c1fee3ff7bb5b9fddda7cc/js/angular/codeschool/index.html)

#### 4.4

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/3e66c451fe9354b8435bd60f8db3c6cfd22bbe8f/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/3e66c451fe9354b8435bd60f8db3c6cfd22bbe8f/js/angular/codeschool/index.html)

#### 4.6

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/d58b318cf65a4a400450f2c25eeaecaec5bb77f4/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/d58b318cf65a4a400450f2c25eeaecaec5bb77f4/js/angular/codeschool/index.html)

#### 4.7

[GitHub Commit](https://github.com/emilyeserven/testwebsites/tree/3affe9a3b097c26c96302d1e91c87062d43c9062/js/angular/codeschool) | [RawGit](https://rawgit.com/emilyeserven/testwebsites/3affe9a3b097c26c96302d1e91c87062d43c9062/js/angular/codeschool/index.html)
