import Card from './common/components/Card';
import Layout from './common/components/Layout';
import DonationForm from './modules/donation/DonationForm';

export default function App() {
  return (
    <Layout>
      <Card>
        <DonationForm />
      </Card>
    </Layout>
  );
}
