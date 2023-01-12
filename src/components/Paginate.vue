<template>
    <div class="w-full flex flex-row justify-center items-center mt-12">
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px">
                <li>
                    <button href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</button>
                </li>
                <div v-for="page in visiblePage">
                    <li>
                        <button class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</button>
                    </li>
                </div>
                <li>
                    <button href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    export default {
        props : {
            maxVisibleButton : {
                type : Number,
                required : true,
                default : 3
            },
            totalPages : {
                type : Number,
                required : true,
                default : 5
            },
            perPage : {
                type : Number,
                required : true
            },
            currentPage : {
                type : Number,
                required : true
            }
        },
        computed : {
            visiblePage(){
                var pages = []
                for(var i = 0; i < this.maxVisibleButton ; i++){
                    pages.push(i)
                }
                return pages
            }
        }
    }
</script>
