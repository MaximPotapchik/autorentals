import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';



const ExpandingBoxes = () => {
    const items = [
        {
          question: 'What is the availability of your cars?',
          answer: 'We try our best to have cars available for rent at all times. However, if you have a specific car in mind, we recommend that you book it in advance to avoid disappointment.',
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'We try our best to have cars available for rent at all times. However, if you have a specific car in mind, we recommend that you book it in advance to avoid disappointment.',
        },
        // Add more items as needed
      ];
    
      return (
        <div className="flex flex-col  items-center justify-center">
          {items.map((item, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className=" flex justify-between w-1/2 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus-visible:ring focus-visible:ring-red-500 focus-visible:ring-opacity-50">
                    <span>{item.question}</span>
                    <span className="inset-y-0 right-0 flex items-center pr-2">
                      <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} className="w-5 h-5" />
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-4 text-sm text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      );
}
 
export default ExpandingBoxes;

