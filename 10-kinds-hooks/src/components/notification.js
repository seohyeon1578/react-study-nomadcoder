import { useNotification } from "../hooks/useNotification ";


const Notification = () => {
  const triggetNotif = useNotification("Can I steal your Kimchi?", { 
    body: "I love Kimchi, don't you?" 
  });

  return (
    <div>
      <button onClick={triggetNotif}>Hello</button>
    </div>
  );
}

export default Notification;