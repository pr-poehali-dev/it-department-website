import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const knowledgeBase = [
    {
      id: 1,
      title: "Не работает интернет на рабочем месте",
      category: "Сеть",
      solution: "Проверьте подключение кабеля Ethernet. Перезагрузите сетевой адаптер через Панель управления.",
      tags: ["интернет", "сеть", "ethernet"]
    },
    {
      id: 2,
      title: "Забыли пароль от рабочей учетной записи",
      category: "Безопасность",
      solution: "Обратитесь к администратору домена для сброса пароля или воспользуйтесь формой самообслуживания.",
      tags: ["пароль", "учетная запись", "домен"]
    },
    {
      id: 3,
      title: "Не устанавливается программное обеспечение",
      category: "ПО",
      solution: "Запускайте установку от имени администратора. Проверьте совместимость с ОС.",
      tags: ["установка", "по", "администратор"]
    }
  ];

  const news = [
    {
      id: 1,
      title: "Плановое обновление серверов",
      date: "20 июля 2025",
      description: "С 22:00 до 02:00 будет проводиться плановое обновление серверной инфраструктуры."
    },
    {
      id: 2,
      title: "Новая версия корпоративного ПО",
      date: "18 июля 2025",
      description: "Доступна новая версия корпоративного программного обеспечения с улучшенным интерфейсом."
    },
    {
      id: 3,
      title: "Обучение по кибербезопасности",
      date: "15 июля 2025",
      description: "Приглашаем всех сотрудников на семинар по основам информационной безопасности."
    }
  ];

  const filteredKnowledge = knowledgeBase.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Monitor" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Департамент IT</h1>
                <p className="text-sm text-slate-600">Информационные технологии</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Newspaper" size={16} className="mr-2" />
                Новости
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="FileText" size={16} className="mr-2" />
                Заявки
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Инструкции
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Settings" size={16} className="mr-2" />
                Регламенты
              </Button>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                <Icon name="Phone" size={16} className="mr-2" />
                Контакты
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Добро пожаловать в портал IT-поддержки
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Здесь вы найдете решения типовых проблем, сможете подать заявку на техническую поддержку 
            и получить доступ к актуальным инструкциям и регламентам.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="Newspaper" size={20} className="text-blue-600" />
                  <CardTitle>Новости</CardTitle>
                </div>
                <CardDescription>
                  Актуальные объявления и обновления от департамента IT
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {news.map((item) => (
                    <div key={item.id} className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                        <Badge variant="outline" className="ml-4">
                          {item.date}
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          Подробнее
                          <Icon name="ArrowRight" size={14} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Все новости
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Knowledge Base */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="Search" size={20} className="text-blue-600" />
                  <CardTitle>База знаний</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input
                      placeholder="Поиск решений..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {filteredKnowledge.slice(0, 3).map((item) => (
                    <div key={item.id} className="border border-slate-200 rounded-lg p-3 hover:border-blue-300 transition-colors">
                      <h4 className="font-medium text-slate-900 text-sm mb-2">{item.title}</h4>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {item.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">{item.solution}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Вся база знаний
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={20} className="text-blue-600" />
                  <CardTitle>Быстрые действия</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Подать заявку
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Инструкции
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Регламенты
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Связаться с поддержкой
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <CardTitle>Контакты</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={14} className="text-slate-500" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} className="text-slate-500" />
                    <span>support@company.ru</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} className="text-slate-500" />
                    <span>Москва, ул. Тверская, 1</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-slate-500" />
                    <span>Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Департамент IT</h3>
              <p className="text-slate-400 text-sm">
                Обеспечиваем стабильную работу IT-инфраструктуры компании
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Техническая поддержка</li>
                <li>Установка ПО</li>
                <li>Сетевые решения</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Инструкции</li>
                <li>Регламенты</li>
                <li>Политики безопасности</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Подать заявку</li>
                <li>База знаний</li>
                <li>Контакты</li>
                <li>Обратная связь</li>
              </ul>
            </div>
          </div>
          <Separator className="my-6 bg-slate-700" />
          <div className="text-center text-sm text-slate-400">
            © 2025 Департамент информационных технологий. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;