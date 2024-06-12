# Angular Polyfill

## Built With

- [Angular](https://angular.dev)
- [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.
- [Cypress](https://www.cypress.io)

## Thoughts

- It is easy to create a polyfill for Angular.
- There are plenty of resources to find polyfills that you can copy and paste.
- It is important to verify that the polyfill is actually being used.  I added a `console.log` to see if the polyfill was being used.  I also checked for the polyfill file in the bundle.
- I used the new `Object.groupBy` method for my polyfill subject.  
- This method is really not great for Angular, as such a structure can be hard to iterate over in an Angular template.  You cannot use `Object.keys()`, and nested `keyvalue` pipes can be difficult to implement.

## Continued Development

- Cypress `13.11` works with Angular 18, but there are some glitches.  

## Useful Resources

- [Cypress Docs](https://docs.cypress.io/guides/component-testing/angular/overview) - angular overview
- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy#browser_compatibility) - Object.groupBy
- [Telerik](https://www.telerik.com/blogs/sorting-filtering-grouping-aggregating-data-angular) - sorting filtering grouping aggregating data angular
- [Medium](https://itnext.io/how-to-build-an-angular-polyfill-0d1d4ddc9aea) - how to build an angular polyfill
- [Medium](https://frontendinterviewquestions.medium.com/what-is-the-use-of-polyfills-in-angular-02b258ad1c5c) - what is the use of polyfills in angular
- [Blog](https://glebbahmutov.com/blog/test-polyfills/) - test polyfills with cypress
- [Gist](https://gist.github.com/gtrabanco/7c97bd41aa74af974fa935bfb5044b6e) - Object.groupby polyfill
- [Github](https://github.com/es-shims/Object.groupBy) - es-shims/Object.groupBy
- [Github](https://github.com/microsoft/TypeScript/pull/56805) - TypeScript pull #56805
- [Stack Overflow](https://stackoverflow.com/questions/77663053/how-to-enable-object-groupby-in-typescript-and-node-js) - how to enable object groupby in typescript and node js
- [YouTube](https://www.youtube.com/watch?v=DLRi9pEnqPI) - Native Html Dialog With Polyfill in Angular Tutorial
- [Blog](https://filiphric.com/reading-and-testing-json-object-in-cypress) - reading and testing json object in cypress
- [Stack Overflow](https://stackoverflow.com/questions/74579858/uncaught-referenceerror-global-is-not-defined-in-angular) - uncausght reference error global is not defined in angular
