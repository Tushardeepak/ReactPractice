import React from 'react'

export const CompoundComponents = () => {
  const isUserKnown = true
  const shouldShowContent = true
  return (
    <>
      Compound Components
      <br />
      <br />
      {/* This makes postCard resuable for different components based on conditions */}
      <PostCard>
        <PostCard.Title>This is a title</PostCard.Title>
        {shouldShowContent && (
          <PostCard.Content>
            The user can freely arrange subcomponents inside PostCard, making
            the structure highly flexible.
          </PostCard.Content>
        )}
        {isUserKnown && <PostCard.UserName>Tushar</PostCard.UserName>}
      </PostCard>
    </>
  )
}

const PostCard = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        height: '10rem',
        width: '15rem',
        padding: '1rem',
      }}
    >
      {children}
    </div>
  )
}

PostCard.Title = ({children}) => {
  return <h3>{children}</h3>
}

PostCard.Content = ({children}) => {
  return <p>{children}</p>
}

PostCard.UserName = ({children}) => {
  // textAlign works only on block elements and i is inline element
  return (
    <div style={{textAlign: 'right', width: '100%'}}>
      <i>-{children}</i>
    </div>
  )
}
