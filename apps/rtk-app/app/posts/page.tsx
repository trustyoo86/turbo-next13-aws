import { Client } from '@notionhq/client';



const notion = new Client({
  auth: 'secret_sCW9j8zJbbyUHwqB1JVfd6auyyJ4ewyYyydohfDjOMZ',
});

function getData() {
  return notion.databases.query({
    database_id: '2146226f78724bc8b273df53b483d658',
  });
}

export default async function Posts() {
  const data = await getData();

  console.log('data ==>', data);

  return (
    <div>Notion page</div>
  );
}