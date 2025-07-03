
import React, { useState } from 'react';
import { Plus, Search, BookOpen, Edit3, Trash2, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Note {
  id: string;
  title: string;
  content: string;
  subject: string;
  tags: string[];
  createdAt: Date;
  starred: boolean;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Photosynthesis Process',
      content: 'Photosynthesis is the process by which plants convert sunlight into energy...',
      subject: 'Biology',
      tags: ['plants', 'energy', 'chlorophyll'],
      createdAt: new Date('2024-01-15'),
      starred: true
    },
    {
      id: '2',
      title: 'Quadratic Equations',
      content: 'A quadratic equation is a polynomial equation of degree 2. The general form is ax² + bx + c = 0...',
      subject: 'Mathematics',
      tags: ['algebra', 'equations', 'parabola'],
      createdAt: new Date('2024-01-14'),
      starred: false
    },
    {
      id: '3',
      title: 'Object-Oriented Programming',
      content: 'OOP is a programming paradigm based on the concept of objects, which contain data and code...',
      subject: 'Computer Science',
      tags: ['programming', 'classes', 'inheritance'],
      createdAt: new Date('2024-01-13'),
      starred: true
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');

  const subjects = ['All', 'Mathematics', 'Biology', 'Computer Science', 'Physics', 'Chemistry'];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSubject = selectedSubject === 'All' || note.subject === selectedSubject;
    
    return matchesSearch && matchesSubject;
  });

  const toggleStar = (noteId: string) => {
    setNotes(notes.map(note => 
      note.id === noteId ? { ...note, starred: !note.starred } : note
    ));
  };

  const deleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      'Mathematics': 'bg-blue-100 text-blue-800',
      'Biology': 'bg-green-100 text-green-800',
      'Computer Science': 'bg-purple-100 text-purple-800',
      'Physics': 'bg-red-100 text-red-800',
      'Chemistry': 'bg-yellow-100 text-yellow-800'
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="md:ml-64 min-h-screen p-6 pb-20 md:pb-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Notes</h1>
            <p className="text-gray-600">Organize and manage your learning materials</p>
          </div>
          <Button className="bg-gradient-learning hover:opacity-90">
            <Plus className="mr-2" size={16} />
            New Note
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              placeholder="Search notes, tags, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400" size={16} />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-learning-primary"
            >
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-learning-primary mb-1">{notes.length}</div>
              <div className="text-sm text-gray-600">Total Notes</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-learning-accent mb-1">{notes.filter(n => n.starred).length}</div>
              <div className="text-sm text-gray-600">Starred</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-learning-secondary mb-1">{new Set(notes.map(n => n.subject)).size}</div>
              <div className="text-sm text-gray-600">Subjects</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {notes.filter(n => new Date().getTime() - n.createdAt.getTime() < 7 * 24 * 60 * 60 * 1000).length}
              </div>
              <div className="text-sm text-gray-600">This Week</div>
            </CardContent>
          </Card>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No notes found</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery ? 'Try adjusting your search terms' : 'Create your first note to get started'}
            </p>
            <Button className="bg-gradient-learning hover:opacity-90">
              <Plus className="mr-2" size={16} />
              Create Note
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note, index) => (
              <Card key={note.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-200 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-800 mb-2 line-clamp-2">
                        {note.title}
                      </CardTitle>
                      <Badge className={`text-xs ${getSubjectColor(note.subject)}`}>
                        {note.subject}
                      </Badge>
                    </div>
                    <button
                      onClick={() => toggleStar(note.id)}
                      className={`ml-2 p-1 rounded-full transition-colors ${
                        note.starred ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
                      }`}
                    >
                      <Star size={16} className={note.starred ? 'fill-current' : ''} />
                    </button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {note.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {note.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                    {note.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{note.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {note.createdAt.toLocaleDateString()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-gray-400 hover:text-learning-primary transition-colors">
                        <Edit3 size={14} />
                      </button>
                      <button 
                        onClick={() => deleteNote(note.id)}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
