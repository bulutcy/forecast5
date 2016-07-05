
import  RenderService from '../RenderService';
import  { render, renderError} from '../RenderService';

describe('Render Service', function() {

    var div = document.createElement('div')
    beforeEach(() => {
        // mock backend
        RenderService.__Rewire__('axios', {
            get: () =>  {
               return {
                   then : (cb)=> cb({ data : '<div>{{test}}</div>'})
               }
            }
         });

        //create a mock dom object

        div.setAttribute('id','wrapper')
        document.body.appendChild(div)
    });

    it('Should render the template properly', (done) => {
        render('test.html', {test:123} ).then(()=>{
            expect(div.innerHTML).toEqual('<div>123</div>');
            done()
        })
    });

    it('Should render error properly', () => {
        renderError()
        expect(div.innerHTML).toEqual('There is a problem with our server, please try again later.');
    });




});
