////////////////////////////////////////////////////////////////////////////
//
// Copyright 2024 Realm Inc.
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

import type { binding } from "../binding";
import type { ClassHelpers } from "../ClassHelpers";
import type { PresentationPropertyTypeName } from "../schema";
import type { ObjCreator, UpdateMode } from "../Object";
import type { Realm } from "../Realm";

/** @internal */
export type TypeHelpers<T = unknown> = {
  toBinding(
    value: T,
    options?: { createObj?: ObjCreator; updateMode?: UpdateMode; isQueryArg?: boolean },
  ): binding.MixedArg;
  fromBinding(value: unknown): T;
};

/** @internal */
export type TypeOptions = {
  realm: Realm;
  name: string;
  optional: boolean;
  objectType: string | undefined;
  objectSchemaName: string | undefined;
  presentation?: PresentationPropertyTypeName;
  getClassHelpers(nameOrTableKey: string | binding.TableKey): ClassHelpers;
};