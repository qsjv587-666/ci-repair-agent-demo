import assert from "node:assert/strict";
import test from "node:test";
import { greeting } from "../src/greeting.js";

test("greeting formats the user name", () => {
  assert.equal(greeting("Ada"), "Hello, Ada");
});
