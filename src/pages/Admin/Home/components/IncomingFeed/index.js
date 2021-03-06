import React from 'react'

// Custom imports
import { PanelProvider, PanelRoot } from '@shared/components/Panel'
import SubmissionList from './Feed'

import './index.scss'

const IncomingFeed = () => (
  <PanelProvider>
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
          </div>
        </div>
        <div className="case-data__content">
          <SubmissionList />
        </div>
      </div>
    </div>
    <PanelRoot />
  </PanelProvider>
)

export default IncomingFeed
