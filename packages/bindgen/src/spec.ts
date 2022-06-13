////////////////////////////////////////////////////////////////////////////
//
// Copyright 2022 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import yaml from "yaml";
import fs from "fs";

import { extend } from "./debug";

const debug = extend("spec-parser");

export type Spec = {
  /* ... */
};

export function parseSpec(filePath: string): Spec {
  const text = fs.readFileSync(filePath, { encoding: "utf8" });
  const parsed = yaml.parse(text);
  debug("Read spec: %O", parsed);
  return {};
}