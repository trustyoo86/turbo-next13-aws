import { Client } from '@notionhq/client';



const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

function getData() {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
}

export default async function Posts() {
  const data = await getData();

  console.log('data ==>', data);

  return (
    <div>Notion page</div>
  );
}