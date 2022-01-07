import React from 'react'
import InjectionProvider from '../../../../di/InjectionContext'
import PostsScreen from '../../../../features/posts/presentation/pages';
import Header from '../../widgets/Header';
import { Layout } from './styles';

const App: React.FC = () => {
	return (
		<InjectionProvider>
			<Layout>
				<Header />
				<PostsScreen />
			</Layout>
		</InjectionProvider>
	);
}

export default App
