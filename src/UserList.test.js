import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', async () => {
    // Render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'sam', email: 'sam@sam.com' }
    ];
    render(<UserList users={users} />);

    // Find all the roles in the table
    const rows = screen.getAllByRole('row');

    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', async () => {

});