import React from 'react';

import 'tachyons';
import './Page.css';

const Page = ({toRender}) => {
    return(
        <div class="flex justify-around formatAll">
            <div class="outline w-20 pa3 mr2 formatLeft">
                <p>-Calendar</p>
            </div>
            <div class="outline w-60 pa3 mr2">
                {toRender}
            </div>
            <div class="outline w-20 pa3 mr2 formatRight">
                <p>-Deals</p><br/>
                <p>-Updates</p>
            </div>
        </div>
    );
}

export default Page;