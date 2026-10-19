export type PracticeFormData = {
  firstName: string;
  lastName: string;
  email?: string;
  gender: 'Male' | 'Female' | 'Other';
  mobile: string;
  hobbies?: string[];
  address?: string;
  state?: string;
  picture?: string;
};

export const requiredOnlyStudent: PracticeFormData = {
  firstName: 'Jane',
  lastName: 'Doe',
  gender: 'Female',
  mobile: '0712345678',
};

export const fullStudent: PracticeFormData = {
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@example.com',
  gender: 'Male',
  mobile: '0987654321',
  hobbies: ['Sports', 'Music'],
  address: '42 Demo Street, Test City',
  state: 'Haryana',
};

export const studentWithUpload: PracticeFormData = {
  ...requiredOnlyStudent,
  picture: 'demo-document.txt',
};

export const invalidMobile = '12345';
