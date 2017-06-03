import { RecipeProjectAngPage } from './app.po';

describe('recipe-project-ang App', () => {
  let page: RecipeProjectAngPage;

  beforeEach(() => {
    page = new RecipeProjectAngPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
