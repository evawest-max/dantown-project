import ChatBox from '@/components/chatbox/ChatBox'
import FriendsRank from '@/components/FriendRanking/FriendsRanking'
import Header from '@/components/Header'
import HighlightCard from '@/components/HighLightCard'
import Navbar from '@/components/Navbar/Navbar'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function App() {
  return (
    <Box backgroundColor="#f7fafc">
      <Box display={['none', 'none', 'none', 'none', 'block', 'block']}>
        <aside style={{
          width: "240px",
          height: "900px",
          float: "left",
          backgroundColor: "white",
        }}
        >
          <Navbar />
        </aside>
      </Box>

      <Box display={['none', 'none', 'none', 'none', 'block', 'block']}>
        <aside style={{
          width: "400px",
          height: "900px",
          float: "right",
          backgroundColor: "white",
          borderLeft: "1px solid background: #F7FAFC "
        }}
        >
          <ChatBox />
        </aside>
      </Box>

      <Header />
      <HighlightCard />
      <FriendsRank />

    </Box>
  )
}
