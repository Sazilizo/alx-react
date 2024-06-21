import React from 'react';
import {shallow} from 'enzyme';
import Notifications from './Notifications';


test('Notifications component renders without crashing', () => {
	render(<Notifications  displayDrawer={true} />)
	expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
  })
  
  test("Notifications renders ul", () => {
	render(<Notifications displayDrawer={true} />)
	expect(screen.getByRole('list')).toBeDefined();
  });
  
  test("Notifications renders three list items", () => {
	render(<Notifications displayDrawer={true} />)
	expect(screen.getAllByRole('listitem').length).toBe(3);
  });
  
  test("Notifications renders three  NotificationItem instances", () => {
	render(<Notifications displayDrawer={true} />)
	// expect(screen.getByTestId('child')).toBeInTheDocument() -> how can I access child components?
  });
  
  test('NotificationItem renders menuItem when displayDrawer is false', () => {
	render(<Notifications />)
	expect(screen.getByText('Your notifications')).toBeDefined()
  })
  
  test('NotificationItem renders menuItem when displayDrawer is true', () => {
	render(<Notifications displayDrawer={true} />)
	expect(screen.getByText('Your notifications')).toBeDefined()
  })