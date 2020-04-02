import React from 'react';
import logo from './logo.svg';

function App() {
	return (
	
<body class="bg-gray-100">
<div class="flex">
        <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
            <div class="xl:max-w-lg xl:ml-auto">
                <img class="h-10" src="/img/logo.svg" alt="Workcation" />
                <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
                    src="/img/beach-work.jpg" alt="Woman vacationing on beach" />
                <h1
                    class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:text-3xl xl:text-4xl">
                    You can work from anywhere.
                    <br class="hidden lg:inline" />
                    <span class="text-indigo-500">Take advantage of it.</span>
                </h1>
                <p class="mt-2 text-gray-600 sm:text-xl sm:mt-4">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                    Modi
                    necessitatibus
                    corporis autem aspernatur fuga
                    officia, ea totam quos blanditiis. Enim?</p>
                <div class="mt-4 sm:mt-6">
                    <a href="#" class="btn btn-indigo sm:text-base shadow-lg">
                        Book
                        your
                        escape now</a>

                    <a href="#" class="btn btn-gray sm:text-base ml-2">
                        Learn More</a>
                </div>
            </div>

        </div>
        <div class="hidden lg:block lg:w-1/2 lg:relative">
            <img class="absolute inset-0 h-full w-full object-cover object-center" src="/img/beach-work.jpg"
                alt="Woman vacationing on beach" />
        </div>
    </div>

</body>
	);
}

export default App;
