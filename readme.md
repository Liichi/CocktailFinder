# CocktailFinder
##### React Native Challenge
### Install
Open terminal and run:
```sh
yarn install
cd ios && pod install
```
### Libraries used
* [react-native]
* [typescript]
* [react-navigation]
* [react-navigation-stack]
* [react-native-vector-icons]
* [redux]
* [react-native-linear-gradient]
### Possible optimizations
#### Implementation
* Implement pagination (require server side changes).
* Abort fetch instead of just ignore.
* Caching search results.
* Caching images.
#### Flatlist Props
* **windowSize** lower value => render less outside-screen elements.
* **removeClippedSubviews** true => don't render outside-screen elements.
* **initialNumToRender** lower value => improve initial render perfomance.
* **maxRenderPerBatch** lower value => render less elements on each scroll, better perfomance.
* **updateCellsBatchingPeriod** lowerValue => better perfomance, but lower update rate.
