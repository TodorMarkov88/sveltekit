export default {
  "transform": {
    "^.+\\.js$": "babel-jest",
   "^.+\\.svelte$": "svelte-jester",
   
 },
 "moduleFileExtensions": ["svelte", "js"],
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
 
 
  }