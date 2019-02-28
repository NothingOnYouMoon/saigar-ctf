import React from 'react'

// Styles
import { Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'

// Custom imports
import SubmissionList from './Feed'
import { PanelConsumer } from '../../../../../_Common/components/Panel'
import SettingsPanel from './SettingsPanel'

import './index.scss'

/*
  @NOTE(peter):
    When the sliders are closed, the component is rerendered (this is intended functionality)
    so we need to use skip to ensure the query is not run whent he component unmounts
*/
const IncomingFeed = () => (
  <div className="incoming_feed_outer">
    <div className="incoming_feed_side">
      <div
        className="feed-header"
        style={{
          textAlign: 'center',
          padding: 25,
          borderBottom: '1px solid #ede4e4',
          background: '#efefef',
        }}
      >
        <div
          style={{
            fontWeight: 350,
            fontSize: '2em',
            alignItems: 'end',
            justifyContent: 'space-evenly',
            display: 'flex',
          }}
        >
          Incoming Feed
          <PanelConsumer>
            {({ showPanel }) => (
              <a onClick={() => showPanel(SettingsPanel)}>
                <Icon intent="primary" icon={IconNames.SETTINGS} iconSize={20} />
              </a>
            )}
          </PanelConsumer>
        </div>
      </div>
      <div className="case-data__content">
        <SubmissionList />
      </div>
    </div>
  </div>
)

export default IncomingFeed
