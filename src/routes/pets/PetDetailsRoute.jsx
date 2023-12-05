import { Container, ContentLayout, Header, TextContent } from '@cloudscape-design/components'

export function Component() {
  return (
    <ContentLayout
      header={
        <Header variant='h1' description='A wonderful cat'>
          Pet Details
        </Header>
      }
    >
      <Container
        header={<Header variant='h2'>Yuki, My Cat</Header>}
      >
        <TextContent>
          <p>
            Yuki is a wonderful cat. She is a little shy, but she is very
            friendly once she gets to know you.
          </p>
          <p>
            She loves to play with her toys, and she loves to eat. She is a
            little overweight, but she is working on it.
          </p>
          <p>
            She is a little shy, but she is very friendly once she gets to know
            you. She loves to play with her toys, and she loves to eat. She is a
            little overweight, but she is working on it.
          </p>
          <p>
            She is a little shy, but she is very friendly once she gets to know
            you. She loves to play with her toys, and she loves to eat. She is a
            little overweight, but she is working on it.
          </p>
          <p>
            She is a little shy, but she is very friendly once she gets to know
            you. She loves to play with her toys, and she loves to eat. She is a
            little overweight, but she is working on it.
          </p>
          <p>
            She is a little shy, but she is very friendly once she gets to know
            you. She loves to play with her toys, and she loves to eat. She is a
            little overweight, but she is working on it.
          </p>
          <p>
            She is a little shy, but she is very friendly once she gets to know
            you. She loves to play with her toys, and she loves to eat. She is a
            little overweight, but she is working on it.
          </p>
        </TextContent>
      </Container>
    </ContentLayout>
  )
}
