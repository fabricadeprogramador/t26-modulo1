var app = new Vue({
    el: '#app',
    data: {
        verbs: [{
                base: 'work',
                thirdPersonSingular: 'works',
                simplePast: 'worked',
                pastParticiple: 'worked',
                continuous: 'working',
                definition: "be engaged in physical or mental activity in order to achieve a purpose or result, especially in one's job; do work",
                examples: ['He said it would work for a girl or a boy.',
                    'A coloring book and crayons kept her busy while they worked and talked.',
                    'We had worked hard on a presentation to a potential customer.'
                ]
            },

            {
                base: 'eat',
                thirdPersonSingular: 'eats',
                simplePast: 'ate',
                pastParticiple: 'eaten',
                continuous: 'eating',
                definition: "the action of ingesting food",
                examples: ['He eats pizza every friday',
                    'They have been eating a lot lately'
                ]
            },

            {
                base: 'eat',
                thirdPersonSingular: 'eats',
                simplePast: 'ate',
                pastParticiple: 'eaten',
                continuous: 'eating',
                definition: "the action of ingesting food",
                examples: ['He eats pizza every friday',
                    'They have been eating a lot lately'
                ]
            },
            {
                base: 'eat',
                thirdPersonSingular: 'eats',
                simplePast: 'ate',
                pastParticiple: 'eaten',
                continuous: 'eating',
                definition: "the action of ingesting food",
                examples: ['He eats pizza every friday',
                    'They have been eating a lot lately'
                ]
            }
        ]
    },
    computed: {
        verb: function () {
            return this.verbs[1];
        }

    }
});