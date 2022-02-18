import { Menu, Container, Icon } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Nav() {
  const router = useRouter();

  const isActive = (route) => router.pathname === route;

  return (
    <Menu fluid borderless>
      <Container text>
        <Link href='/login'>
          <Menu.Item position='right' header active={isActive('/login')}>
            <Icon size='large' name='sign in' />
            Login
          </Menu.Item>
        </Link>

        <Link href='/signup'>
          <Menu.Item position='right' header active={isActive('/signup')}>
            <Icon size='large' name='signup' />
            Signup
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Nav;
