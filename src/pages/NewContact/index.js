import Input from '../../components/Input';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />

      <Input type="text" placeholder="Nome" />

      <Select>
        <option value="0">Pessoa física</option>
        <option value="1">Pessoa jurídica</option>
      </Select>
    </>
  );
}