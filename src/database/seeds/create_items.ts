import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'logo.png' },
        { title: 'Pilhas e Baterias', image: 'logo.png' },
        { title: 'Papéis e Papelão', image: 'logo.png' },
        { title: 'Resíduos Eletrônicos', image: 'logo.png' },
        { title: 'Resíduos Orgânico', image: 'logo.png' },
        { title: 'Óleo de Cozinha', image: 'logo.png' },
    ]);
}