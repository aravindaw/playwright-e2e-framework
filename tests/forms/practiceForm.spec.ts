import { test } from '@fixture/pages.fixture';
import { fullStudent, invalidMobile, requiredOnlyStudent, studentWithUpload } from '@testData/practiceForm.data';

test.describe('Practice form', () => {
  test.beforeEach(async ({ practiceFormPage }) => {
    await practiceFormPage.open();
  });

  test('@SMOKE submits the form with required fields only', async ({ practiceFormPage }) => {
    await practiceFormPage.fill(requiredOnlyStudent);
    await practiceFormPage.submit();
    await practiceFormPage.assertSubmitted({
      'Student Name': 'Jane Doe',
      Gender: 'Female',
      Mobile: requiredOnlyStudent.mobile,
    });
  });

  test('@REGRESSION submits the form with all details', async ({ practiceFormPage }) => {
    await practiceFormPage.fill(fullStudent);
    await practiceFormPage.submit();
    await practiceFormPage.assertSubmitted({
      'Student Name': 'John Smith',
      'Student Email': fullStudent.email!,
      Gender: 'Male',
      Mobile: fullStudent.mobile,
      Hobbies: 'Sports, Music',
      Address: fullStudent.address!,
      'State and City': fullStudent.state!,
    });
  });

  test('@REGRESSION submits the form with an uploaded file', async ({ practiceFormPage }) => {
    await practiceFormPage.fill(studentWithUpload);
    await practiceFormPage.submit();
    await practiceFormPage.assertSubmitted({ Picture: studentWithUpload.picture! });
  });

  test('@REGRESSION does not submit an empty form', async ({ practiceFormPage }) => {
    await practiceFormPage.submit();
    await practiceFormPage.assertNotSubmitted();
  });

  test('@REGRESSION does not submit a mobile number that is not 10 digits', async ({ practiceFormPage }) => {
    await practiceFormPage.fill({ ...requiredOnlyStudent, mobile: invalidMobile });
    await practiceFormPage.submit();
    await practiceFormPage.assertNotSubmitted();
  });
});
