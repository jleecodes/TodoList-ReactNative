import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Task from './components/Task';

export default function App() {
	return (
		<View style={styles.container}>
			{/* Today's Tasks */}
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Today's tasks</Text>
				<View style={styles.items}>
					{/* This is where the tasks will go! */}
					<Task text={'Task 1'}></Task>
					<Task text={'Task 2'}></Task>
				</View>
			</View>

			{/* Write a task */}
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.writeTaskWrapper}>
				<TextInput style={styles.input} placeholder={'Write a task'} />
				<TouchableOpacity>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8EAED',
	},
	tasksWrapper: {
		paddingTop: 80,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	items: {
		marginTop: 30,
	},
});
