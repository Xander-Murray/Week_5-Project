# Web Development Project 4 - Veni Vici!

Submitted by: **Xander Murray**

This web app: **Veni Vici** lets users discover random cat breeds using [The Cat API](https://thecatapi.com/). Each discovery shows an image, breed name, origin, temperament, and life span. Users can click on the origin of a cat to “ban” it from appearing again — and can remove it from the ban list with another click. Clicking “Discover New Cat” fetches a new, random cat that doesn’t match any banned origins.

Time spent: **6 hours** in total

---

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - Displays breed name, origin, temperament, and life span
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Each click replaces the previous cat with a new one
- [x] **API call response results appear random to the user**
  - Uses the “order=RANDOM” query in The Cat API
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - The origin attribute is clickable
- [x] **Clicking on an attribute in the ban list removes it**
  - Ban list updates instantly
- [x] **Attributes on the ban list prevent further images/API results with those attributes from being displayed**
  - Banned origins are skipped during fetch

---

## Optional Features Implemented

- [x] Ban list updates dynamically and persists during the session
- [x] Each cat’s card includes an image and consistent attribute layout
- [x] Skip logic automatically fetches a new cat if a banned origin appears
- [ ] Session history of previous cats
- [ ] LocalStorage persistence of ban list

---

## Video Walkthrough

Here's a walkthrough of the implemented user stories:

<img src='./week5.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

**GIF created with:** OBS

---

## Notes

While building the app, I learned how to:

- Filter API results dynamically with a ban list.
- Handle asynchronous fetches and retries with recursion.
- Use React hooks (`useState`, `useEffect`) to manage API data and UI updates.

---

## 📜 License

Copyright 2025 **Xander Murray**

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
