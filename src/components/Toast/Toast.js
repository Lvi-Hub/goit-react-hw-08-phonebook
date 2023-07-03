import { toast } from 'react-hot-toast';

export function toastSuccess(message) {
  toast.success(message, {
    style: {
      color: 'white',
      background: 'green',
      border: '1px solid black',
    },
  });
}

export function toastError(message) {
  toast.error(message, {
    style: {
      color: 'white',
      background: 'red',
      border: '1px solid black',
    },
  });
}

// export function toastError() {
//   toast.error('User not exist', {
//     style: {
//       color: 'white',
//       background: 'red',
//       border: '1px solid black',
//     },
//   });
// }
