import { FC, useState } from 'react';
import { Form, Input, Button, DatePicker, InputNumber, message, Divider, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaChair, FaCouch, FaCheckCircle } from 'react-icons/fa';

const standardTables = Array.from({ length: 15 }, (_, i) => ({
  label: `Table ${i + 1}`,
  value: `table${i + 1}`,
  desc: 'Standard Seating',
  seats: 4,
  index: i + 1,
}));
const privateRooms = [
  { label: 'Room 1', value: 'room1', desc: 'Private & Exclusive', seats: 8 },
  { label: 'Room 2', value: 'room2', desc: 'Private & Exclusive', seats: 8 },
];

const Booking: FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [selectedTables, setSelectedTables] = useState<string[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>();
  const [showMergeAlert, setShowMergeAlert] = useState(false);
  const [mergeConfirmed, setMergeConfirmed] = useState(false);

  // Xử lý chọn bàn thường (multi-select)
  const handleTableClick = (value: string, index: number) => {
    if (selectedRoom) return; // Nếu đã chọn phòng thì không cho chọn bàn thường
    let newSelected = [...selectedTables];
    if (newSelected.includes(value)) {
      newSelected = newSelected.filter(v => v !== value);
    } else {
      newSelected.push(value);
    }
    setSelectedTables(newSelected);
    setMergeConfirmed(false);
    // Kiểm tra nếu chọn đúng 2 bàn liên tiếp
    if (newSelected.length === 2) {
      const idxs = newSelected.map(v => standardTables.find(t => t.value === v)?.index).sort((a, b) => (a ?? 0) - (b ?? 0));
      if (idxs[0] && idxs[1] && idxs[1] - idxs[0] === 1) {
        setShowMergeAlert(true);
      } else {
        setShowMergeAlert(false);
      }
    } else {
      setShowMergeAlert(false);
    }
  };

  // Xử lý chọn phòng riêng (chỉ chọn 1)
  const handleRoomClick = (value: string) => {
    setSelectedRoom(value === selectedRoom ? undefined : value);
    setSelectedTables([]);
    setShowMergeAlert(false);
    setMergeConfirmed(false);
  };

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success(t('booking_success'));
    }, 1200);
  };

  // Responsive grid classes
  const gridStandard = 'grid grid-cols-3 gap-2 sm:gap-4 mb-6';
  const gridRoom = 'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 mb-2';

  return (
    <div className='max-w-2xl mx-auto my-4 p-2 sm:p-4 md:p-6 bg-white rounded-2xl shadow-xl'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-2 text-center'>{t('booking')}</h2>
      <p className='text-center text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base'>{t('choose_table_desc') || 'Choose your preferred tables or private rooms for your dining experience.'}</p>
      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item label={t('your_name')} name='name' rules={[{ required: true, message: t('please_enter_name') }]}> <Input size='large' /> </Form.Item>
        <Form.Item label={t('phone_number')} name='phone' rules={[{ required: true, message: t('please_enter_phone') }]}> <Input size='large' /> </Form.Item>
        <Form.Item label={t('date_time')} name='datetime' rules={[{ required: true, message: t('please_select_datetime') }]}> <DatePicker showTime format='YYYY-MM-DD HH:mm' className='w-full' size='large' /> </Form.Item>
        <Form.Item label={t('number_of_people')} name='people' rules={[{ required: true, message: t('please_enter_people') }]}> <InputNumber min={1} max={50} className='w-full' size='large' /> </Form.Item>
        <Divider className='my-4'>{t('choose_table')}</Divider>
        <Form.Item label='' name='table' rules={[{ required: true, message: t('please_choose_table') }]}> 
          <div>
            <div className='mb-2 font-semibold text-lg'>{t('normal_table') || 'Standard Tables'}</div>
            <div className={gridStandard}>
              {standardTables.map(opt => (
                <div
                  key={opt.value}
                  onClick={() => handleTableClick(opt.value, opt.index)}
                  className={`cursor-pointer rounded-xl border transition-all flex flex-col items-center justify-center p-3 sm:p-4 shadow-sm relative bg-white ${selectedTables.includes(opt.value) ? 'border-green-400 bg-green-50 ring-2 ring-green-200' : 'border-gray-200 hover:border-orange-400 hover:shadow-md'} ${selectedRoom ? 'opacity-40 pointer-events-none' : ''}`}
                  style={{ minHeight: 100 }}
                >
                  <FaChair size={28} className={`mb-1 sm:mb-2 ${selectedTables.includes(opt.value) ? 'text-green-500' : 'text-gray-400'}`} />
                  <div className='font-bold text-sm sm:text-base'>{opt.label}</div>
                  <div className='text-xs text-gray-500'>{opt.desc}</div>
                  <div className='text-xs text-gray-400 mt-1'>{t('seats_label', { count: opt.seats }) || `${opt.seats} seats`}</div>
                  {selectedTables.includes(opt.value) && (
                    <FaCheckCircle size={18} className='text-green-500 absolute top-2 right-2' />
                  )}
                </div>
              ))}
            </div>
            <div className='mb-2 font-semibold text-lg'>{t('private_room') || 'Private Rooms'}</div>
            <div className={gridRoom}>
              {privateRooms.map(opt => (
                <div
                  key={opt.value}
                  onClick={() => handleRoomClick(opt.value)}
                  className={`cursor-pointer rounded-xl border transition-all flex flex-col items-center justify-center p-3 sm:p-4 shadow-sm relative bg-white ${selectedRoom === opt.value ? 'border-green-400 bg-green-50 ring-2 ring-green-200' : 'border-gray-200 hover:border-orange-400 hover:shadow-md'} ${selectedTables.length > 0 ? 'opacity-40 pointer-events-none' : ''}`}
                  style={{ minHeight: 100 }}
                >
                  <FaCouch size={28} className={`mb-1 sm:mb-2 ${selectedRoom === opt.value ? 'text-green-500' : 'text-gray-400'}`} />
                  <div className='font-bold text-sm sm:text-base'>{opt.label}</div>
                  <div className='text-xs text-gray-500'>{opt.desc}</div>
                  <div className='text-xs text-gray-400 mt-1'>{t('seats_label', { count: opt.seats }) || `${opt.seats} seats`}</div>
                  {selectedRoom === opt.value && (
                    <FaCheckCircle size={18} className='text-green-500 absolute top-2 right-2' />
                  )}
                </div>
              ))}
            </div>
            {showMergeAlert && !mergeConfirmed && (
              <Alert
                className='mt-2 mb-2'
                message={t('merge_table_message') || 'Bạn có muốn ghép 2 bàn này lại với nhau không?'}
                type='info'
                showIcon
                action={
                  <Button size='small' type='primary' onClick={() => setMergeConfirmed(true)}>
                    {t('merge_table_confirm') || 'Ghép bàn'}
                  </Button>
                }
              />
            )}
            {showMergeAlert && mergeConfirmed && (
              <Alert
                className='mt-2 mb-2'
                message={t('merge_table_success') || 'Đã chọn ghép bàn!'}
                type='success'
                showIcon
              />
            )}
          </div>
        </Form.Item>
        <Form.Item label={t('note')} name='note'> <Input.TextArea rows={3} /> </Form.Item>
        <div className='flex justify-center mt-6'>
          <Button type='primary' htmlType='submit' loading={loading} size='large' className='px-8 sm:px-10 text-base font-semibold rounded-full shadow-lg w-full sm:w-auto'>
            {t('submit_booking')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Booking; 