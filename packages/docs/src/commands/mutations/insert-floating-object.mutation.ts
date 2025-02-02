/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { IDrawing, IMutation } from '@univerjs/core';
import { CommandType, IUniverInstanceService } from '@univerjs/core';

import type { ISeachDrawingMutation } from './set-floating-object.mutation';

export interface IInsertDrawingMutation extends ISeachDrawingMutation {
    drawing: IDrawing;
}

export const InsertDrawingMutation: IMutation<IInsertDrawingMutation> = {
    id: 'doc.mutation.insert-drawing',
    type: CommandType.MUTATION,
    handler: (accessor, params) => {
        const univerdoc = accessor.get(IUniverInstanceService).getUniverDocInstance(params.documentId);

        if (univerdoc == null) {
            return false;
        }

        let drawings = univerdoc.getSnapshot().drawings;

        if (drawings == null) {
            drawings = {};
            univerdoc.getSnapshot().drawings = drawings;
        }

        const { objectId, drawing } = params;

        drawings[objectId] = drawing;

        return true;
    },
};
