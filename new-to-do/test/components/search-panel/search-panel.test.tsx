import { mount } from 'enzyme';
import { SearchPanel } from 'components/search-panel/search-panel';
import sinon from 'sinon';
import { IPropsSearchPanel } from "../../../src/components/search-panel/types-search-panel";
import * as React from 'react';

describe('src/components/item-add-form/item-add-form.tsx', () => {
    const props: IPropsSearchPanel = {
       term: 'asdasd',
       onSearchChange: sinon.stub()
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should TodoListItemProps mount component', () => {
        const wrapper = mount(<SearchPanel {...props} />);

        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

});