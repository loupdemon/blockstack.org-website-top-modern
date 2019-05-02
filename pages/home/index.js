import React from 'react'
import { Section } from '@components/v2/section'
import { Box, Flex } from 'blockstack-ui'
import { Button } from '@components/button'
import { Events } from '@components/v2/events'
import { Sections } from '@components/v2/sections'
import { Press } from '@components/v2/press'
import { Videos } from '@components/v2/videos'
import { CaseStudies } from '@components/v2/case-studies'
import { meta, caseStudies, videos, press } from './data'
import fetch from 'cross-fetch'
import { News } from '@components/v2/articles'
import { PhotoGrid } from '@components/v2/photos-grid'

const photos = [
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-001.jpg' },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-004.jpg',
    width: 1 / 4,
    backgroundPosition: 'left center'
  },
  {
    src: 'https://blockstack-www.imgix.net/photos/photo-conference-003.jpg',
    flexGrow: 1
  },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-002.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-conference-005.jpg' },
  { src: 'https://blockstack-www.imgix.net/photos/photo-hackathon-001.jpg' }
]
const Hero = ({ ...rest }) => (
  <>
    <Section
      flexDirection="column"
      textAlign="center"
      minHeight={`calc(70vh - 112px)`}
      variant="white"
      width={1}
      alignItems="center"
      justifyContent="center"
    >
      <Section.Pane width={1} justifyContent="center" alignItems="center">
        <Section.Title maxWidth="80%">
          Blockchain computing platform and app ecosystem
        </Section.Title>
        <Section.Text maxWidth="50%">
          Blockstack apps protect your digital rights and are powered by the
          Stacks blockchain.
        </Section.Text>
        <Flex pt={5}>
          <Button>Create ID</Button>
          <Button ml={3} variant="secondary">
            Build Apps
          </Button>
        </Flex>
      </Section.Pane>
    </Section>
    <Box
      mb={8}
      is="img"
      src="https://blockstack-www.imgix.net/home-hero-temp.png?auto=format&w=1800"
      width="100%"
      maxWidth="100%"
      display="block"
    />
  </>
)

class HomePage extends React.Component {
  static async getInitialProps(ctx) {
    const feedData = await fetch(
      'https://blog.blockstack.org/wp-json/wp/v2/posts?per_page=100'
    )
    const usersData = await fetch(
      'https://blog.blockstack.org/wp-json/wp/v2/users?per_page=30'
    )
    const feed = await feedData.json()
    const users = await usersData.json()

    return {
      meta,
      feed,
      users
    }
  }
  render() {
    const sections = [
      {
        variant: 'white',
        panes: [
          {
            title: {
              is: 'h2',
              children: 'Secure your identity and data with Blockstack ID'
            },
            text: {
              children: `We provide an online identity with blockchain-based security and
          encryption — protecting your data from big internet companies.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                href: '#'
              }
            ]
          },
          {
            type: 'graphic',
            src: 'https://file-qgpqpsyvye.now.sh/'
          }
        ]
      },
      {
        variant: 'white',
        bg: 'sky.10',
        panes: [
          {
            type: 'graphic',
            src: 'https://file-mmywyvbqys.now.sh/'
          },
          {
            title: {
              is: 'h2',
              children: 'Build blockchain-powered apps in as little as an hour'
            },
            text: {
              children: `Everything you need, from auth to data storage, ready and in
          production. 100% Javascript — zero backend development.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                href: '#'
              }
            ]
          },
          {
            width: 1,
            children: <CaseStudies items={caseStudies} />
          }
        ]
      },
      {
        variant: 'white',
        panes: [
          {
            title: {
              is: 'h2',
              children: 'Build an app and get paid instantly with App Mining'
            },
            text: {
              children: `Every month we pay out $100,000 to the best apps built on Blockstack. The better your app, the more you earn.`
            },
            actions: [
              {
                type: 'link',
                label: 'Learn more',
                href: '#'
              }
            ]
          },
          {
            type: 'graphic',
            src: 'https://file-tjijlhuiuk.now.sh/'
          }
        ]
      },
      {
        variant: 'white',
        children: (
          <Box width="100%" maxWidth="100%">
            <PhotoGrid items={photos} />
          </Box>
        )
      },

      {
        variant: 'white',
        py: 8,
        alignItems: 'flex-start',
        panes: [
          {
            title: {
              is: 'h2',
              pr: 5,
              children: 'Attend summits, hackathons, and workshops'
            }
          },
          {
            text: {
              children: `We host over 100 global events with 10,000+ developers, scientists and entrepreneurs each year.`
            },
            actions: [
              {
                type: 'link',
                label: 'View all upcoming events',
                href: '#'
              }
            ]
          },
          {
            width: '100%',
            children: <Events pt={8} />
          }
        ]
      },
      {
        variant: 'ink',
        maxWidth: '1224px',
        panes: [
          {
            width: '100%',
            py: 8,
            children: <Videos items={videos} />
          }
        ]
      },
      {
        variant: 'white',
        py: 8,
        minHeight: 0,
        alignItems: 'flex-start',
        panes: [
          {
            justifyContent: 'flex-start',
            title: {
              is: 'h2',
              pr: 5,
              children: 'Latest news'
            },
            actions: [
              {
                type: 'link',
                label: 'View all news',
                href: '#'
              }
            ]
          },

          {
            children: (
              <News items={this.props.feed} users={this.props.users} pt={8} />
            )
          }
        ]
      },
      {
        variant: 'white',
        panes: [
          {
            width: 1,
            children: <Press items={press} />
          }
        ]
      },
      {
        variant: 'blue',
        minHeight: '400px',
        py: 8,
        panes: [
          {
            title: {
              is: 'h2',
              children: 'Ready to start building on Blockstack?'
            },
            text: {
              children:
                'Try over 100 apps built on Blockstack or build yours in less than an hour.'
            }
          },
          {
            actions: {
              justifyContent: 'center',
              items: [
                {
                  type: 'button',
                  label: 'Create ID'
                },
                {
                  type: 'button',
                  label: 'Build apps',
                  variant: 'secondary'
                }
              ]
            }
          }
        ]
      }
    ]

    return (
      <>
        <Hero />
        <Sections sections={sections} />
      </>
    )
  }
}

export default HomePage
